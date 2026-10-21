"use client";

import { useState, useMemo } from "react";
import { Recipe } from "@/types/recipe";
import SearchInput from "./SearchInput";
import RecipeGrid from "./RecipeGrid";

interface RecipeCatalogProps {
  initialRecipes: Recipe[];
}

export default function RecipeCatalog({ initialRecipes }: RecipeCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredRecipes = useMemo(() => {
    let result = [...initialRecipes];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(q) ||
          recipe.cuisine.toLowerCase().includes(q) ||
          recipe.category.toLowerCase().includes(q) ||
          recipe.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    if (sortBy === "time-asc") {
      result.sort((a, b) => a.cookTimeMinutes - b.cookTimeMinutes);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [initialRecipes, searchQuery, sortBy]);

  return (
    <div className="space-y-6">
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing {filteredRecipes.length} of {initialRecipes.length} recipes
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-emerald-700 hover:underline font-medium"
          >
            Clear search
          </button>
        )}
      </div>

      <RecipeGrid
        recipes={filteredRecipes}
        emptyMessage={`No recipes found matching "${searchQuery}". Try searching by another ingredient or cuisine.`}
        onReset={() => setSearchQuery("")}
      />
    </div>
  );
}

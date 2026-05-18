#!/bin/bash

# A script to initialize all problem-solving technique folders with index.md and index.ts templates.

set -e

# Target directory
SOLUTIONS_DIR="/home/junior/Projects/dsa/solutions"

# Function to convert kebab-case to Title Case
format_name() {
    echo "$1" | sed -r 's/(^|-)([a-z])/\U \2/g' | sed -r 's/^ //'
}

# Array of all techniques to build
declare -a techniques=(
    "brute-force"
    "back-tracking"
    "greed-method"
    "branch-and-bond"
    "dynamic-programming"
    "divide-and-conquer"
    "sliding-window"
    "two-pointers"
    "fast-slow-pointers"
    "merge-intervals"
    "cyclic-sort"
    "two-heaps"
    "island-traversal"
    "kth-element"
)

echo "Starting initialization of solutions directories..."

for tech in "${techniques[@]}"; do
    dir="${SOLUTIONS_DIR}/${tech}"
    title=$(format_name "$tech")
    
    # 1. Create directory if it doesn't exist
    mkdir -p "$dir"
    
    # 2. Write index.md if it doesn't exist
    md_file="${dir}/index.md"
    if [ ! -f "$md_file" ]; then
        cat <<EOT > "$md_file"
# ${title}

## Overview
Briefly explain the core theory, concepts, and when to use this problem-solving technique.

## Complexity Analysis
* **Time Complexity**: O(N) / O(N log N) / O(2^N) - explain why.
* **Space Complexity**: O(1) / O(N) - explain why.

## Key Identification Signals
* List 2-3 clues in a problem description that signal using this technique.

## Algorithm Template / Blueprint
Describe the core framework or pseudocode of this technique.

## Classic Problems & Solutions
* Link or list classic practice problems here (e.g. from LeetCode or your own ds/ problems).
EOT
        echo "Created ${tech}/index.md"
    fi
    
    # 3. Write index.ts if it doesn't exist
    ts_file="${dir}/index.ts"
    if [ ! -f "$ts_file" ]; then
        # Create camelCase name for the function
        func_name=$(echo "$tech" | awk -F- '{for(i=1;i<=NF;i++){if(i==1){printf "%s", $i}else{printf "%s", toupper(substr($i,1,1)) substr($i,2)}}}')
        
        cat <<EOT > "$ts_file"
/**
 * @file index.ts
 * @description Implementation and template for the ${title} pattern.
 */

/**
 * Standard blueprint/template for ${title}
 */
export function ${func_name}Template<T>(input: T[]): unknown {
    // TODO: Implement the standard skeleton for ${title}
    return null;
}

// --- Example Usage ---
// const result = ${func_name}Template([1, 2, 3]);
EOT
        echo "Created ${tech}/index.ts"
    fi
done

echo "Solutions folder initialized successfully!"

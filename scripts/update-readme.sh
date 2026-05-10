#!/bin/bash

# Function to convert kebab-case to Title Case
format_name() {
    echo "$1" | sed -r 's/(^|-)([a-z])/\U \2/g' | sed -r 's/^ //'
}

echo "Updating README.md..."

# Generate Data Structures Table
ds_content="| Data Structure | Implementation | Documentation | Practice Problems |"$'\n'
ds_content+="| :--- | :--- | :--- | :--- |"$'\n'
if [ -d "data-structures" ]; then
    for dir in data-structures/*/; do
        if [ -d "$dir" ]; then
            name=$(basename "$dir")
            title=$(format_name "$name")
            path_prefix=${dir%/}
            ds_content+="| **$title** | [Code](./$path_prefix/index.ts) | [Notes](./$path_prefix/index.md) | [Problems](./$path_prefix/problems/) |"$'\n'
        fi
    done
fi

# Generate Algorithms Table
algo_content="| Category | Algorithm | Implementation | Documentation | Practice Problems |"$'\n'
algo_content+="| :--- | :--- | :--- | :--- | :--- |"$'\n'
if [ -d "algorithms" ]; then
    for cat_dir in algorithms/*/; do
        if [ -d "$cat_dir" ]; then
            cat_name=$(basename "$cat_dir")
            cat_title=$(format_name "$cat_name")
            for dir in "$cat_dir"*/; do
                if [ -d "$dir" ]; then
                    name=$(basename "$dir")
                    title=$(format_name "$name")
                    path_prefix=${dir%/}
                    algo_content+="| $cat_title | **$title** | [Code](./$path_prefix/index.ts) | [Notes](./$path_prefix/index.md) | [Problems](./$path_prefix/problems/) |"$'\n'
                fi
            done
        fi
    done
fi

# Update README.md
temp_file=$(mktemp)

state="normal"
while IFS= read -r line || [ -n "$line" ]; do
    if [[ "$line" == "<!-- DATA_STRUCTURES_START -->" ]]; then
        echo "$line" >> "$temp_file"
        echo -n "$ds_content" >> "$temp_file"
        state="skip"
    elif [[ "$line" == "<!-- DATA_STRUCTURES_END -->" ]]; then
        echo "$line" >> "$temp_file"
        state="normal"
    elif [[ "$line" == "<!-- ALGORITHMS_START -->" ]]; then
        echo "$line" >> "$temp_file"
        echo -n "$algo_content" >> "$temp_file"
        state="skip"
    elif [[ "$line" == "<!-- ALGORITHMS_END -->" ]]; then
        echo "$line" >> "$temp_file"
        state="normal"
    elif [[ "$state" == "normal" ]]; then
        echo "$line" >> "$temp_file"
    fi
done < README.md

mv "$temp_file" README.md
chmod +x update-readme.sh

echo "README.md updated successfully!"

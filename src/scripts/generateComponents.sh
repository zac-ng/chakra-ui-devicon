#!/usr/bin/env bash

# git clone https://github.com/devicons/devicon.git # Clone repository
echo "Cleaning Old Components"
rm -rf ../components/*
for dir in ./devicon/icons/*; do
    if [ -d "$dir" ]; then
        name="$(basename "$dir")"   # Name of component
        path=""
        filename=$(ls $dir | grep -o -m 1 ".*-original.svg") # If there are two files that match will only include first
        if [ -z $filename ]; then
            echo 'No match found, attempting to find use any svg file.'
            filename=$(ls $dir | grep -o -m 1 ".*.svg") # If there are two files that match will only include first
            if [ -z $filename ]; then
                echo "ERROR: no svg file was found in the folder $dir. Skipping folder."
                continue
            fi
        fi
        filename=$dir/$filename
        svgPath=$(cat $filename | grep -oP "(<path).*(\/>)") # Attempt to find svgPath
        if [ -z $svgPath ]; then
            echo "svg path was not found in file $filename.  Skipping file."
            continue
        fi
        echo "Adding \"$name\" Icon Component"
        npm run generate $name $svgPath
    fi
done
# rm -rf devicon # Remove repository
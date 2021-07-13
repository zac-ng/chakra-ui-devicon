#!/usr/bin/env bash

# git clone https://github.com/devicons/devicon.git # Clone repository
echo "Cleaning Old Components"
rm -rf ../components/*
for dir in ./devicon/icons/*; do
    if [ -d "$dir" ]; then
        name="$(basename "$dir")"   # Name of component
        path=""
        filename=$(ls $dir | grep -o -m 1 ".*-original.svg") # If there are two files that match will only include original file
        if [ -z $filename ]; then
            echo 'No match found, attempting to find use any svg file.'
            filename=$(ls $dir | grep -o -m 1 ".*.svg") # If an original svg could not be found we match any other svg
            if [ -z $filename ]; then
                echo "ERROR: no svg file was found in the folder $dir. Skipping folder."
                continue
            fi
        fi
        filename=$dir/$filename
        echo "Filename $(realpath $filename)"
        echo "Adding \"$name\" Icon Component"
        npm run generateComponents --name $name --path $(realpath $filename)

        # Cleaning up replaced special characters by plop file
        
        name=${name^}
        sed -i 's/&lt;/</g' ../components/$name.js
        sed -i 's/&gt;/>/g' ../components/$name.js
        sed -i 's/&quot;/"/g' ../components/$name.js
        sed -i 's/&#x3D;/=/g' ../components/$name.js
    fi
done
npm run generateIndex
# rm -rf devicon # Remove repository
#!/usr/bin/env bash

git clone https://github.com/devicons/devicon.git # Clone repository
echo "Cleaning Old Components"
rm -rf ../components/*
for dir in ./devicon/icons/*; do
    if [ -d "$dir" ]; then
        name="$(basename "$dir")"
        echo "Adding \"$name\" Icon Component" 
    fi
done
rm -rf devicon # Remove repository
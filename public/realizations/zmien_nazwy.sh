#!/bin/bash

for FOLDER in */; do
    if [ -d "$FOLDER" ]; then
        FOLDER_NAME="${FOLDER%/}"
        COUNTER=1

        for FILE in "$FOLDER"*.{jpg,jpeg,png,webp}; do
            [ -e "$FILE" ] || continue
            EXT="${FILE##*.}"
            NEW_NAME="projekt-${FOLDER_NAME}-${COUNTER}.${EXT}"
            mv "$FILE" "${FOLDER}${NEW_NAME}"
            ((COUNTER++))
        done
    fi
done

echo "Zmieniono nazwy zdjęć."

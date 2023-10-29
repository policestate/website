#!/bin/bash

# List of filenames
names=(
  "Auer"
  "Auer1"
  "Beniiche"
  "Breidenbach"
  "Cousaert"
  "Dotan"
  "Gaillourdet"
  "Gudgeon"
  "Harvey"
  "Jensen"
  "Kitzler"
  "Metelski"
  "Schar"
  "Shah"
  "Tolmach"
  "Wang"
  "Werner"
  "Xu"
  "XuDeFi"
  "ZhangSoK"
)

# Loop over each name and perform the sed operations
for name in "${names[@]}"; do
  # Adjust the content to add a space after "Academic:"
  sed -i 's/Academic:/Academic:{" "}/g' "$name.js"
done


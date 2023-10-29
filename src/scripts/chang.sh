#!/bin/bash

# List of new filenames
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
  "Navigation"
  "Schar"
  "Shah"
  "Tolmach"
  "Wang"
  "Werner"
  "Xu"
  "XuDeFi"
  "ZhangSoK"
)

# Loop over each name and perform the copy and sed operations
for name in "${names[@]}"; do
  cp Zhou.js "$name.js"
  sed -i "s/Zhou/$name/g" "$name.js"
done


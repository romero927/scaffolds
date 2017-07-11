resume export kgromero.html --theme=stackoverflow
resume export kgromero.pdf --theme=short
./ResumeFodder/ResumeFodder export resume.json kgromero.doc ./ResumeFodder/Templates/iconic.xml
cp kgromero.doc ../public/kgromero.doc
cp kgromero.html ../public/kgromero.html
cp kgromero.pdf ../public/kgromero.pdf
cp resume.json ../public/kgromero.json
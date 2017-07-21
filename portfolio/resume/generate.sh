resume export kgromero.html --theme=stackoverflow
resume export kgromero.pdf --theme=short
./ResumeFodder/ResumeFodder export resume.json kgromero.doc ./ResumeFodder/Templates/iconic.xml
cp kgromero.doc ../public/files/kgromero.doc
cp kgromero.html ../public/files/kgromero.html
cp kgromero.pdf ../public/files/kgromero.pdf
cp resume.json ../public/files/kgromero.json
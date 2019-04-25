webdev build
cat build/dart/ntango.dart.js web/js/ntango.js build/dart/ntango.ddc.js > package/ntango.js
cp web/css/ntango.css package/ntango.css
cd package
npm pack
cd ..

 cd ../ylehilds.github.io/portfolio

rm asset-manifest.json
rm index.html
rm manifest.json
rm service-worker.js
rm -rf static


 cd ../portfolio


npm run build
# mv build/asset-manifest.json ../ylehilds.github.io/portfolio/asset-manifest.json
# mv build/manifest.json ../ylehilds.github.io/portfolio/manifest.json
# mv build/service-worker.js ../ylehilds.github.io/portfolio/service-worker.js
# mv build/index.html ../ylehilds.github.io/portfolio/index.html
mv -v build/* ../ylehilds.github.io/portfolio

cd ../ylehilds.github.io/portfolio

git add .
git commit -am 'deploying build'
git push
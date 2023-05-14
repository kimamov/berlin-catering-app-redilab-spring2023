import foodItemsList from "../../data.json";

export async function getPackageNameList() {
  return [
    {
      params: {
        name: "Aladin",
      },
    },
    {
      params: {
        name: "1001 Nacht",
      },
    },
    {
      params: {
        name: "Sahara",
      },
    },
  ];
}

export async function getPackageDetails(packageName) {
  let packageNameComparison = {
    aladin: "Aladin",
    nacht: "1001 Nacht",
    sahara: "Sahara",
  };

  let currentKeyPackageName = Object.keys(packageNameComparison).find(
    (key) => packageNameComparison[key] === packageName
  );

  let packages = {
    aladin: {
      name: "Aladin",
      ingredients: [],
    },
    nacht: {
      name: "1001 Nacht",
      ingredients: [],
    },
    sahara: {
      name: "Sahara",
      ingredients: [],
    },
  };

  await foodItemsList.forEach((dish) => {
    dish.package.forEach((pack) => {
      let keyPackageName = Object.keys(packageNameComparison).find(
        (key) => packageNameComparison[key] === pack
      );
      if (keyPackageName) {
        packages[keyPackageName].ingredients = packages[
          keyPackageName
        ].ingredients.concat(dish.ingredients);
      }
    });
  });

  return packages[currentKeyPackageName];
}

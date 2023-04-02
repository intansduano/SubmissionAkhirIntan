const baseMealUrl = 'https:themealdb.com/api/json/v1/1/';

class DataSource {
    static searchMeal(keyword) {
        return fetch(`${baseMealUrl}/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} data tidak ditemukan, mohon masukan nama atau kategori`);
                }
            });
    }

    static searchCategory(keyword) {
        return fetch(`${baseMealUrl}/list.php?c=list`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} data tidak ditemukan, mohon masukan nama atau kategori`);
                }
            });
    }
}

export default DataSource;
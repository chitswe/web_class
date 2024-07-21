fetch("https://api-football-standings.azharimm.dev/leagues")
    .then(result => {
        console.log(result);
        switch (result.status) {
            case 200:
                return result.json();
                break;
            case 404:
                return Promise.reject("Url not found");
        }
    }).then((json) => {
        let leagues = json.data;
        let i = 0;

        while (i < leagues.length) {
            let league = leagues[i];
            if (league.id == "eng.1")
                return league;
            i++;
        }

    }).then((league) => {
        console.log(league);
    })
    .catch(e => {
        console.log(e);
    });

/* 
    This is a comment. 
    This is second comment...
*/
async function load_leagues() {
    var response = await fetch("https://api-football-standings.azharimm.dev/leagues");
    switch (response.status) {
        case 200:
            return response.json();
        case 404:
            return Promise.reject("Not found");
    }
}

async function find_eng_league() {
    let leagues = await load_leagues();
    let i = 0;
    while (i < leagues.length) {
        let league = leagues[i];
        if (league.id == "eng.1") {
            console.log(league);
            return league;
        }
        i++;
    }
}

find_eng_league();

let a = 1;
if (a > 1) console.log("....");

const matchesData = (await (await fetch("./matches.json")).json()).data;
console.log(matchesData);

const matchesContainer = document.getElementById("matches-container");

matchesData.forEach((matchesGroup) => {
  const { date, matches } = matchesGroup;
  // Creo un container per il gruppo dei matches
  const groupSection = createMatchesGroupSection(date);
  // Creo La lista per i match del gruppo
  const groupList = createMatchesList();

  // Per ogni match creo l'elemento della card e lo appendo alla lista
  matches.forEach((match) => {
    const card = createMatchCard(match);
    groupList.append(card);
  });

  // Appendo la lista dei match alla section del gruppo
  groupSection.append(groupList);
  // Appendo il gruppo dei matches al container generico
  matchesContainer.append(groupSection);
});

function createMatchesGroupSection(groupDate) {
  const matchesSection = document.createElement("section");
  matchesSection.classList.add("container", "matches");
  matchesSection.innerHTML = `<h3 class="matches-date">${groupDate}</h3>`;
  return matchesSection;
}

function createMatchesList() {
  const matchesList = document.createElement("ul");
  matchesList.classList.add("cards-list");
  return matchesList;
}

function createMatchCard({ place, teams, type }) {
  const [firstTeam, secondTeam] = teams;
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `
  <div class="card-inner">
        <!-- Left side of card -->
        <div
            class="card-left"
            style="background-color: rgba(${firstTeam.color}, 0.6)"
        >
            <img src="assets/img/${firstTeam.themeImage}.png" alt="" />
        </div>
        <!-- Left side of card -->

        <!-- Card text -->
        <div class="card-text">
            <div class="card-text-top">
                <div class="game-type">
                    <span class="font-secondary">${type}</span>
                </div>
            </div>
            <div class="card-text-teams">
                <div class="team-logo">
                    <img src="assets/img/${firstTeam.logo}" alt="" />
                    <div class="team-logo-label">
                        <small>(${firstTeam.conference})</small>
                        <p>${firstTeam.position}</p>
                    </div>
                </div>
                <div class="team-info left">
                    <div class="team-name">
                        <div class="team-name-content">
                            ${
                              firstTeam.name.split(" ").length > 1
                                ? `<div class="small">${
                                    firstTeam.name.split(" ")[0]
                                  }</div><div class="large">${
                                    firstTeam.name.split(" ")[1]
                                  }</div>`
                                : `<div class="large">${
                                    firstTeam.name.split(" ")[0]
                                  }</div>`
                            }
                            
                        </div>
                        <div class="team-logo-label-mobile">
                            <small>(${firstTeam.conference})</small>
                            <p>${firstTeam.position}</p>
                        </div>
                    </div>
                    <div class="team-score">${firstTeam.score}</div>
                </div>
                <div class="team-info right">
                    <div class="team-score">${secondTeam.score}</div>
                    <div class="team-name">
                        <div class="team-name-content">
                            ${
                              secondTeam.name.split(" ").length > 1
                                ? `<div class="small">${
                                    secondTeam.name.split(" ")[0]
                                  }</div><div class="large">${
                                    secondTeam.name.split(" ")[1]
                                  }</div>`
                                : `<div class="large">${
                                    secondTeam.name.split(" ")[0]
                                  }</div>`
                            }
                        </div>
                        <div class="team-logo-label-mobile">
                            <small>(${secondTeam.conference})</small>
                            <p>${secondTeam.position}</p>
                        </div>
                    </div>
                </div>
                <div class="team-logo">
                    <img src="assets/img/${secondTeam.logo}" alt="" />
                    <div class="team-logo-label">
                        <small>(${secondTeam.conference})</small>
                        <p>${secondTeam.position}</p>
                    </div>
                </div>
            </div>
            <div class="card-text-stadium">
                <p class="font-secondary">scoutstoun stadium</p>
            </div>
            <div class="card-text-footer">
                <img src="assets/img/united-rugby-copy.png" alt="" />
            </div>
        </div>
        <!-- /Card text -->

        <!-- Right side of the card -->
        <div
            class="card-right"
            style="background-color: rgba(${secondTeam.color}, 0.6)"
        >
            <img src="assets/img/${secondTeam.themeImage}.png" alt="" />
        </div>
        <!-- /Right side of the card -->
    </div>
  `;

  return card;
}

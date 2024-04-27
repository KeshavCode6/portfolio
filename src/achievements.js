$(document).ready(() => {

    fetch("https://api.jsonsilo.com/public/6e9db586-73bc-4207-b8af-fb32badf02ba")
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load data');
            }
            return response.json();
        })
        .then(data => {
            let achievements = data["achievements"]

            let certIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-calendar-fill icon-svg" viewBox="0 0 16 16">
            <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
            </svg>
            `

            let awardIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-award-fill icon-svg" viewBox="0 0 16 16">
            <path
                d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
        </svg>
            `
            let objects = []

            achievements.forEach(key => {
                let icon = certIcon;
                if (key["icon"] == "award") {
                    icon = awardIcon;
                }
                var obj = `
                    <div class="card bg-info text-white mb-1 link grow">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                ${icon}
                            </div>
                            <div class="col">
                                <h5 class="fs-4">
                                    ${key["name"]}
                                    <span class="bg-primary rounded fs-6 p-1 date"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                                  </svg>
                                    ${key["date"]}

                                    </span>
                                </h5>
                                <p class="mb-0">
                                    ${key["description"]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                `

                objects.push(obj)
            });

            objects.forEach(element => {
                $("#achievements").append(element)
            });

        })
        .catch(error => {
            console.error('Could not load data: ', error);
        });
});
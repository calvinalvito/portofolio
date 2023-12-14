// experiences.js

function createExperienceCard(experience) {
    const container = document.getElementById("experienceContainer");

    const card = document.createElement("div");
    card.className = "w-full h-full justify-start items-start mb-[40px] lg:gap-8 lg:inline-flex lg:w-1/2 pr-4";
    card.innerHTML = `
        <div class="pr-8 text-green-700 text-lg font-bold mb-[4px]">${experience.date}</div>
        <div class="flex-col justify-start items-start gap-2 inline-flex">
            <div class="flex-col justify-start items-start gap-1 flex">
                <div class="text-white text-xl font-semibold">${experience.title}</div>
                <div class="w-full h-6 flex flex-wrap items-center gap-2">
                    <div class="left-0 top-0 text-white text-base font-light">${experience.company}</div>
                    <div class="w-[5px] h-[5px] bg-zinc-100 rounded-full"></div>
                    <div class="top-0 text-white text-base font-light">${experience.location}</div>
                </div>
            </div>
            <div class="w-full text-white text-base font-light">
                ${experience.description ? `<ul class="list-disc ml-6">${experience.description.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            </div>

        </div>
    `;
    container.appendChild(card);
}

// Fetch JSON data from a separate file
function fetchExperiences() {
    fetch('dist/data.json')
        .then(response => response.json())
        .then(data => {
            // Clear the existing container
            const container = document.getElementById("experienceContainer");
            container.innerHTML = "";

            // Create experience cards using the external component
            data.experiences.forEach(createExperienceCard);
        })
        .catch(error => console.error('Error fetching experiences data:', error));
}

// Call the function to fetch and display experiences
fetchExperiences();

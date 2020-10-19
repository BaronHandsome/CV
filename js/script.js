
const allSkills = {
    ['html-skill']: 9,
    ['css-skill']: 9,
    ['scss-skill']: 8,
    ['less-skill']: 8,
    ['bt-skill']: 4,
    ['js-skill']: 5,
    ['react-skill']: 4,
    ['git-skill']: 4
};


function createSkills() {
    for (const [key, value] of Object.entries(allSkills)) {
        const section = document.getElementById(key);

        for (let i = 0; i < value; i++) {
            const parallelogram = document.createElement('div');
            parallelogram.classList.add('parallelogram', 'parallelogram-purple');
            section.appendChild(parallelogram);
        }

        for (let i = value; i < 10; i++) {
            const parallelogram = document.createElement('div');
            parallelogram.classList.add('parallelogram', 'parallelogram-blue')
            section.appendChild(parallelogram);
        }
    }
}

createSkills();
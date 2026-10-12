function startTerminal() {
    const body = document.querySelector('body');
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    const terminal = document.querySelector('#terminal-wrap');
    const inputField = document.querySelector('#terminal-input');
    const output = document.querySelector('#terminal-output');

    const translations = {
        ru: {
            "page.title": "Портфолио Терминал Осепян Артема",
            "page.description": "Интерактивный терминал-портфолио, имитирует работу командной строки с набором пользовательских команд для навигации.",
            "welcome.greeting": "Добро пожаловать на мой сайт портфолио. (Версия 1.0.1)",
            "welcome.source": "Исходный код этого проекта можно посмотреть в репозитории на",
            "welcome.help": "Чтобы посмотреть список доступных команд, введите",
            "help.about": "об авторе",
            "help.clear": "очистить терминал",
            "help.contacts": "просмотреть контакты автора",
            "help.cowsay": "вывести сообщение в стиле cowsay",
            "help.help": "посмотреть список доступных команд",
            "help.history": "просмотреть историю команд",
            "help.language": "сменить язык интерфейса",
            "help.projects": "просмотреть проекты автора",
            "help.themes": "просмотреть доступные темы",
            "help.welcome": "показать блок приветствия",
            "help.whoami": "информация о текущем пользователе",
            "help.tab": "автоматически дополняет команду",
            "help.arrowUpKey": "Стрелка вверх",
            "help.arrowUp": "вернуться к предыдущей команде",
            "usage": "Использование",
            "example": "Пример",
            "commandNotFound": "Команда не найдена",
            "contacts.title": "Контакты",
            "projects.title": "Вот некоторые из моих проектов",
            "projects.arpic.title": "Интерактивные метки на изображении",
            "projects.arpic.shortTitle": "Интерактивные метки",
            "projects.arpic.description": "Плагин для создания интерактивных тегов на изображении JS / CSS / HTML",
            "projects.arraySorting.title": "Сортировка массивов",
            "projects.arraySorting.shortTitle": "Сортировка массивов",
            "projects.arraySorting.description": "Интерактивная визуализация алгоритмов сортировки с помощью JavaScript и HTML Canvas",
            "projects.sudoku.title": "Судоку",
            "projects.sudoku.shortTitle": "Судоку",
            "projects.sudoku.description": "Реализация игры Судоку на JavaScript с возможностью выбора 6 уровней сложности и проверки решений (JS / CSS / HTML)",
            "about.greeting": "Привет! Меня зовут Осепян Артем!",
            "about.role": "Я <b>Full-stack разработчик</b>, с большим опытом создания веб-приложений.",
            "about.values": "Люблю, когда код чистый, интерфейс — понятный, а backend — как швейцарские часы.",
            "language.en": "Английский",
            "language.ru": "Русский",
        },
        en: {
            "page.title": "Portfolio Terminal of Artyom Osepyan",
            "page.description": "An interactive terminal-style portfolio that simulates a command-line interface with custom navigation commands.",
            "welcome.greeting": "Welcome to my portfolio website. (Version 1.0.1)",
            "welcome.source": "The source code for this project is available in the repository on",
            "welcome.help": "For a list of available commands, type",
            "help.about": "about the author",
            "help.clear": "clear the terminal",
            "help.contacts": "check contacts",
            "help.cowsay": "display a cowsay-style message",
            "help.help": "check available commands",
            "help.history": "view command history",
            "help.language": "change interface language",
            "help.projects": "view projects",
            "help.themes": "check available themes",
            "help.welcome": "display a welcome screen",
            "help.whoami": "about current user",
            "help.tab": "autocompletes the command",
            "help.arrowUpKey": "Up Arrow",
            "help.arrowUp": "go back to previous command",
            "usage": "Usage",
            "example": "Example",
            "commandNotFound": "Command not found",
            "contacts.title": "Contacts",
            "projects.title": "Featured projects",
            "projects.arpic.title": "Interactive image labels",
            "projects.arpic.shortTitle": "Interactive labels",
            "projects.arpic.description": "A JavaScript plugin to add interactive tags/labels to images. Lightweight, customizable (HTML5/CSS3)",
            "projects.arraySorting.title": "Array sorting",
            "projects.arraySorting.shortTitle": "Array sorting",
            "projects.arraySorting.description": "Interactive visualization of sorting algorithms using JavaScript and HTML Canvas",
            "projects.sudoku.title": "Sudoku",
            "projects.sudoku.shortTitle": "Sudoku",
            "projects.sudoku.description": "Implementation of the game Sudoku in JavaScript with the ability to choose 6 levels of complexity and check solutions (JS / CSS / HTML)",
            "about.greeting": "Hi! My name is Artyom Osepyan!",
            "about.role": "I am a <b>Full-stack developer</b>, with extensive experience building web applications.",
            "about.values": "I love it when the code is clean, the interface is intuitive, and the backend runs like a Swiss watch.",
            "language.en": "English",
            "language.ru": "Russian",
        },
    };

    const languageCodes = ["en", "ru"];

    const themeNames = ["dark", "light", "blue-matrix", "espresso", "green-goblin", "ubuntu"];

    const contactLinks = [
        {name: "Github", value: "https://github.com/artengin/", url: "https://github.com/artengin/"},
        {name: "Telegram", value: "https://t.me/artengin", url: "https://t.me/artengin"},
        {name: "E-mail", value: "artengin.osepyan@gmail.com", url: "mailto:artengin.osepyan@gmail.com"},
    ];

    const projectList = [
        {key: "arpic", url: "https://artengin.github.io/arpic-template/"},
        {key: "arraySorting", url: "https://artengin.github.io/array-sorting/"},
        {key: "sudoku", url: "https://artengin.github.io/sudoku/"},
    ];

    let lang;

    function t(key) {
        return translations[lang][key] ?? translations.ru[key] ?? key;
    }

    function setLang() {
        const savedLang = localStorage.getItem("lang");
        lang = languageCodes.includes(savedLang) ? savedLang : "ru";
        document.documentElement.lang = lang;
        title.innerHTML = t("page.title");
        description.setAttribute("content", t("page.description"));
    }
    setLang();

    window.addEventListener('load', () => {
        inputField.focus();
    });

    const isTouchScreen = window.matchMedia('(pointer: coarse)').matches;

    document.addEventListener('click', (event) => {
      if (event.target !== inputField && !(isTouchScreen && event.target.closest('[data-command]'))) {
        inputField.focus();
      }
    });

    function setTheme() {
        if (localStorage.getItem("theme") !== null) {
            body.id = localStorage.getItem("theme");
        } else {
            body.id = 'dark';
        }
    }
    setTheme();


    function escapeHtml(value) {
        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function commandHistory(value){
        return `<span><span class="styleOne">guest</span>@<span class="styleTwo">terminal.artengin</span>:~$ <span class="history-value">${escapeHtml(value)}</span></span>`;
    }

    function displayCommand(value){
        const command = document.createElement('div');
        command.classList.add("command-div");
        command.innerHTML = commandHistory(value);
        terminal.appendChild(command);
    }

    function themesSetName(name) {
        localStorage.setItem("theme", name);
        setTheme();
        displayCommand(`themes set ${name}`);
    }

    function clearInput() {
        inputField.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    }

    async function welcome() {
        const welcome = document.createElement('div');
        welcome.classList.add("command-div");
        terminal.appendChild(welcome);
        await fetch('includes/welcome.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            welcome.innerHTML = html;
            welcome.querySelectorAll('[data-text]').forEach(element => {
                element.innerHTML = t(element.dataset.text);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки welcome.html:', error);
        });
        inputField.focus();
        window.scrollTo(0, document.body.scrollHeight);
    }

    function help() {
        const help = document.createElement('div');
        help.classList.add("command-list");
        help.classList.add("command-div");
        help.innerHTML = `
        ${commandHistory("help")}
        ${topCommands.map(command => `<p><span class="command styleTwo" data-command="${command.name}">${command.name}</span> - ${t(`help.${command.name}`)}</p>`).join("")}
        <p style="margin-top: 15px"><span class="command">Tab</span> =>  ${t("help.tab")}</p>
        <p><span class="command">${t("help.arrowUpKey")}</span> =>  ${t("help.arrowUp")}</p>
        `;
        terminal.appendChild(help);
    }

    function clear() {
        terminal.innerHTML = "";
        displayCommand("clear");
    }

    function whoami() {
        const whoami = document.createElement('div');
        whoami.classList.add("command-div");
        whoami.innerHTML = `
        ${commandHistory("whoami")}
        <p>guest</p>`;
        terminal.appendChild(whoami);
    }

    let queryHistory = ["welcome"];
    function history() {
        const history = document.createElement('div');
        history.classList.add("command-div");
        history.classList.add("command-history");
        let result = commandHistory("history");
        for (let i=0; i < queryHistory.length; i++) {
            result += `<p>${escapeHtml(queryHistory[i])}</p>`;
        }
        history.innerHTML = result;
        terminal.appendChild(history);
    }

    function contacts() {
        const contacts = document.createElement('div');
        contacts.classList.add("command-div");
        contacts.classList.add("command-list");
        contacts.innerHTML = `
        ${commandHistory("contacts")}
        <p style="margin-bottom: 10px">${t("contacts.title")}:</p>
        ${contactLinks.map((contact, i) => `<p><span class="command styleTwo" data-command="contacts go ${i + 1}">${i + 1}. ${contact.name}</span> - ${contact.value}</p>`).join("")}
        <p style="margin: 15px 0 0">${t("usage")}: contacts go &lt;contacts-number&gt; </p>
        <p style="margin: 0">${t("example")}: contacts go 1</p>
        `;
       terminal.appendChild(contacts);
    }

    function contactsGo() {
        const contacts = document.createElement('div');
        contacts.classList.add("command-div");
        contacts.classList.add("themes");
        contacts.innerHTML = `
        ${commandHistory("contacts go")}
        <p>${t("usage")}: contacts go &lt;contacts-number&gt; </p>
        <p>${t("example")}: contacts go 1</p>
        `;
       terminal.appendChild(contacts);
    }

    function contactsGoNumber(number) {
        window.open(contactLinks[number - 1].url, '_blank');
        displayCommand(`contacts go ${number}`);
    }

    function cowsay() {
        const cowsay = document.createElement('div');
        cowsay.classList.add("command-div");
        cowsay.classList.add("themes");
        cowsay.innerHTML = `
        ${commandHistory("cowsay")}
        <span class="pre">cowsay version 3.03, (c) 1999 Tony Monroe</span>
        <p>${t("usage")}: cowsay &lt;anything&gt; </p>
        <p>${t("example")}: cowsay Hello world</p>
        `;
       terminal.appendChild(cowsay);
       window.scrollTo(0, document.body.scrollHeight);
    }

    const cowTemplate = `<pre aria-hidden="true">
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</pre>`;

    function cowsayOutput(value) {
        const cowsay = document.createElement('div');
        cowsay.classList.add("command-div");
        cowsay.classList.add("cowsay");
        cowsay.innerHTML = `
        ${commandHistory("cowsay " + value)}
        <pre> ${"_".repeat(value.length + 2)}
&lt; ${escapeHtml(value)} &gt;
 ${"-".repeat(value.length + 2)}</pre>
        ${cowTemplate}`;
        terminal.appendChild(cowsay);
    }

    function themes() {
        const themes = document.createElement('div');
        themes.classList.add("command-div");
        themes.classList.add("themes");
        themes.innerHTML = `
        ${commandHistory('themes')}
        <div class="theme-list">${themeNames.map(name => `<span data-command="themes set ${name}"><span class="theme-swatch" data-swatch="${name}" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="styleTwo">${name}</span></span>`).join("")}</div>
        <p>${t("usage")}: themes set &lt;theme-name&gt; </p>
        <p>${t("example")}: themes set espresso</p>
        `;
       terminal.appendChild(themes);
    }

    function themesSet() {
        const themes = document.createElement('div');
        themes.classList.add("command-div");
        themes.classList.add("themes");
        themes.innerHTML = `
        ${commandHistory('themes set')}
        <p>${t("usage")}: themes set &lt;theme-name&gt; </p>
        <p>${t("example")}: themes set espresso</p>
        `;
       terminal.appendChild(themes);
    }

    function projects() {
        const projects = document.createElement('div');
        projects.classList.add("command-div");
        projects.classList.add("projects");
        projects.classList.add("themes");
        projects.innerHTML = `
        ${commandHistory('projects')}
        <p>${t("projects.title")}:</p>
        ${projectList.map((project, i) => `
        <div>
            <p><b class="styleTwo" data-command="projects go ${i + 1}">${i + 1}. ${t(`projects.${project.key}.title`)}</b></p>
            <p>${t(`projects.${project.key}.description`)}</p>
        </div>`).join("")}
        <p>${t("usage")}: projects go &lt;project-number&gt; </p>
        <p>${t("example")}: projects go 1</p>
        `;
       terminal.appendChild(projects);
    }

    function projectsGo() {
        const projects = document.createElement('div');
        projects.classList.add("command-div");
        projects.classList.add("themes");
        projects.innerHTML = `
        ${commandHistory('projects go')}
        <p>${t("usage")}: projects go &lt;project-number&gt; </p>
        <p>${t("example")}: projects go 1</p>
        `;
       terminal.appendChild(projects);
    }

    function projectsGoNumber(number) {
        window.open(projectList[number - 1].url, '_blank');
        displayCommand(`projects go ${number}`);
    }

    function about() {
        const about = document.createElement('div');
        about.classList.add("command-div");
        about.classList.add("about");
        about.innerHTML = `
        ${commandHistory('about')}
        <p>${t("about.greeting")}</p>
        <p>${t("about.role")}</p>
        <p>${t("about.values")}</p>
        `;
       terminal.appendChild(about);
    }

    function notFound(value) {
        let inValue;
        if (value.length > 24) {
            inValue = value.slice(0, 24) + "...";
        } else {
            inValue = value;
        }
        const notFound = document.createElement('div');
        notFound.classList.add("command-div");
        notFound.innerHTML = `
        ${commandHistory(inValue)}
        <p>${t("commandNotFound")}: ${escapeHtml(inValue)}</p>`;
        terminal.appendChild(notFound);
    }

    function language() {
        const language = document.createElement('div');
        language.classList.add("command-div");
        language.classList.add("command-list");
        language.innerHTML = `
        ${commandHistory('language')}
        ${languageCodes.map(code => `<p><span class="styleTwo" data-command="language set ${code}">${code.charAt(0).toUpperCase() + code.slice(1)}</span> - ${t(`language.${code}`)}</p>`).join("")}
        <p style="margin: 15px 0 0">${t("usage")}: language set &lt;${languageCodes.join("|")}&gt; </p>
        <p style="margin: 0">${t("example")}: language set en</p>`;
        terminal.appendChild(language);
    }

    function languageSet() {
        const language = document.createElement('div');
        language.classList.add("command-div");
        language.classList.add("command-list");
        language.innerHTML = `
        ${commandHistory('language set')}
        <p style="margin: 0">${t("usage")}: language set &lt;${languageCodes.join("|")}&gt; </p>
        <p style="margin: 0">${t("example")}: language set en</p>`;
        terminal.appendChild(language);
    }

    function languageSetCode(code) {
        localStorage.setItem("lang", code);
        clear();
        setLang();
        displayCommand(`language set ${code}`);
        welcome();
    }

    const topCommands = [
        {name: "about", run: about},
        {name: "clear", run: clear},
        {name: "contacts", run: contacts},
        {name: "cowsay", run: cowsay},
        {name: "help", run: help},
        {name: "history", run: history},
        {name: "language", run: language},
        {name: "projects", run: projects},
        {name: "themes", run: themes},
        {name: "welcome", run: welcome},
        {name: "whoami", run: whoami},
    ];

    const commands = [
        ...topCommands.map(command => [command.name, command.run]),
        ["language set", languageSet],
        ...languageCodes.map(code => [`language set ${code}`, () => languageSetCode(code)]),
        ["contacts go", contactsGo],
        ...contactLinks.map((contact, i) => [`contacts go ${i + 1}`, () => contactsGoNumber(i + 1)]),
        ["themes set", themesSet],
        ...themeNames.map(name => [`themes set ${name}`, () => themesSetName(name)]),
        ["projects go", projectsGo],
        ...projectList.map((project, i) => [`projects go ${i + 1}`, () => projectsGoNumber(i + 1)]),
    ];

    let historyPosition = queryHistory.length;

    function runCommand(input) {
        const value = input.trim();
        if (value === '') {
            displayCommand('');
            clearInput();
            return;
        }
        queryHistory.push(value);
        historyPosition = queryHistory.length;
        if (value.slice(0, 7).toLowerCase() === "cowsay " && value.length > 7) {
            let cowValue = value.slice(7);
            if (cowValue.length > 24) {
                cowValue = cowValue.slice(0, 24) + "...";
            }
            cowsayOutput(cowValue);
            clearInput();
            return;
        }
        const currentValue = value.toLowerCase();
        const command = commands.find(cmd => cmd[0] === currentValue);

        if (command) {
            command[1]();
            clearInput();
        } else {
            notFound(value);
            clearInput();
        }
    }

    terminal.addEventListener('click', (event) => {
        const commandElement = event.target.closest('[data-command]');
        if (commandElement && event.detail === 1 && window.getSelection().isCollapsed) {
            runCommand(commandElement.dataset.command);
        }
    });

    inputField.addEventListener('keydown', function(event) {
        output.textContent = '';
        if (event.key === 'ArrowUp') {
            if (historyPosition > 0) {
                historyPosition--;
                inputField.value = queryHistory[historyPosition];
                setTimeout(() => {
                    inputField.setSelectionRange(inputField.value.length, inputField.value.length);
                }, 0);
            }
        }
        if (event.key === 'ArrowDown') {
            if (historyPosition < queryHistory.length - 1) {
                historyPosition++;
                inputField.value = queryHistory[historyPosition];
            } else {
                historyPosition = queryHistory.length;
                inputField.value = '';
            }
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            runCommand(inputField.value);
        }

        if (event.key === 'Tab') {
            event.preventDefault();

            const currentValue = inputField.value;

            searchMatches(commands, currentValue);

            function searchMatches(data, currentValue) {
                if (currentValue === '') {
                    return;
                }

                if (currentValue === "themes set ") {
                    output.innerHTML = themeNames.map(name => `<span>${name}</span>`).join("  ");
                    return;
                }

                if (currentValue === "contacts go ") {
                    output.innerHTML = contactLinks.map((contact, i) => `<span>${i + 1}.${contact.name}</span>`).join("  ");
                    return;
                }

                if (currentValue === "projects go ") {
                    output.innerHTML = projectList.map((project, i) => `<span>${i + 1}.${t(`projects.${project.key}.shortTitle`)}</span>`).join("  ");
                    return;
                }
                if (currentValue === "language set ") {
                    output.innerHTML = languageCodes.join("&nbsp;&nbsp;&nbsp;");
                    return;
                }

                const matches = data
                    .map(cmd => cmd[0])
                    .filter(name => name.startsWith(currentValue) && name !== currentValue);

                if (matches.length === 0) {
                    output.textContent = '';
                    return;
                }

                if (matches.length === 1) {
                    inputField.value = matches[0];
                    output.textContent = '';
                    return;
                }

                const commonPart = matches.reduce((prefix, name) => {
                    let i = 0;
                    while (i < prefix.length && i < name.length && prefix[i] === name[i]) {
                        i++;
                    }
                    return prefix.slice(0, i);
                }, matches[0]);

                if (commonPart && commonPart !== currentValue) {
                    inputField.value = commonPart;
                    output.textContent = '';
                } else {
                    const singleWordMatches = matches.filter(match => !match.includes(' '));
                    if (singleWordMatches.length > 0) {
                        output.textContent = singleWordMatches.join('\t');
                    } else {
                        output.textContent = '';
                    }
                }
            }
        }
    });
    welcome();
}
startTerminal();

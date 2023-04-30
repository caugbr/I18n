<template>
    <div id="app">
        <langs-menu :langs="languages" @select="changeLang" />
        <h1>{{ t('Simple i18n for Vue') }}</h1>
        <div class="big">{{ t('Translate strings in a simple way') }}</div>

        <p>
            {{ t('intro1') }}
        </p>

        <form class="form" action="#" @submit.prevent>
            <div class="formline">
                <div class="code">
                    es: "Sin manzanas | Una manzana | {apples} manzanas"<br>
                    pt-br: "Nenhuma maçã | Uma maçã | {apples} maçãs"<br>
                    en: "No apples | One apple | {apples} apples"
                </div>
            </div>
            <div class="formline">
                <label for="apples">{{ t('Amount of apples') }}</label>
                <select id="apples" v-model.number="apples">
                    <option value="0">Zero</option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="-5">-5</option>
                </select>
            </div>
            <div class="formline">
                <label>{{ t('Result') }}</label>
                <div class="result">{{ tp('applesSample', { apples }) }}</div>
            </div>

            
            <div class="formline">
                <div class="code">
                    es: "Tienes un solo proyecto | Tienes varios proyectos"<br>
                    pt-br: "Você tem um único projeto | Você tem múltiplos projetos"<br>
                    en: "You have a single project | You have multiple projects"
                </div>
            </div>
            <div class="formline">
                <label for="apples">{{ t('Amount of projects') }}</label>
                <select id="apples" v-model.number="projects">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="formline">
                <label>{{ t('Result') }}</label>
                <div class="result">{{ tp('projectsSample', { projects }) }}</div>
            </div>
        </form>
    </div>
</template>

<script>
import LangsMenu from '@/components/LangsMenu.vue';
export default {
    name: 'App',
    components: {
        LangsMenu
    },
    data() {
        return {
            apples: 0,
            projects: 1
        }
    },
    computed: {
        languages() {
            return this.getLangs();
        }
    },
    methods: {
        changeLang(lng) {
            this.$store.dispatch('setLanguage', lng)
        }
    },
    watch: {
        '$store.state.language' (lng) {
            this.setLang(lng);
        }
    },
    beforeMount() {
        if (this.$store.state.language) {
            this.setLang(this.$store.state.language);
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 1.4;
    color: #2c3e50;
    margin: 60px auto 40px;
    width: 860px;
    max-width: 90%;
}
.form {
    width: 740px;
    max-width: 100%;
    margin: 2rem auto;
    text-align: left;
}
.form .formline {
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.form .formline.inline,
.form .formline .inline {
    display: inline-block;
    margin-right: 1.5rem;
    width: auto;
}
.form .formline label {
    width: 25%;
    flex-grow: 0;
    flex-shrink: 0;
}
.form .formline input[type="text"], select, textarea {
    width: 70%;
    flex-grow: 2;
    flex-shrink: 2;
    padding: 0.45rem;
    border: 1px solid #cccccc;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    outline: 0;
}
.code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    background-color: lightgray;
    padding: 16px;
    margin: 1rem auto;
}
.result {
    width: 70%;
    flex-grow: 2;
    flex-shrink: 2;
    padding: 0.45rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.4rem;
}
.form .formline input[type="text"]:focus,
.form .formline select:focus,
.form .formline textarea:focus  {
    border: 1px dashed #666;
}
.form .formline textarea {
    height: 1rem;
    transition: height 300ms ease-in-out;
}
.form .formline textarea:focus {
    height: 3rem;
}
.form .formline input[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
    flex-grow: 0;
    flex-shrink: 0;
}
.form .formline input[type="checkbox"] + label {
    width: 70%;
    flex-grow: 2;
    flex-shrink: 2;
}
.form .formline input[type="range"] {
    width: 40%;
    margin-right: 1rem;
}
.form .formline.buttons {
    justify-content: flex-end;
}
.form .formline.buttons button {
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    border: 1px solid #cccccc;
    margin-left: 0.5rem;
    cursor: pointer;
}
.form .formline.buttons button.primary {
    background-color: #115daa;
    color: #fff;
}
.form .formline.buttons button:disabled {
    opacity: 0.6;
    cursor: default;
}
</style>

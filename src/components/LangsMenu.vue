<template>
    <div class="langs-menu">
        <form action="#" @submit.prevent>
            <label for="chose-lang">{{  t('Choose your language') }}</label>
            <select id="chose-lang" @change="select">
                <option v-for="name, code in langs" :value="code" :key="code">{{ name }}</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LangsMenu',
    props: {
        langs: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            selectedLang: ''
        };
    },
    methods: {
        select(val) {
            this.selectedLang = val.target.value;
            this.$emit('select', this.selectedLang);
        }
    }
}
</script>

<style>
.langs-menu {
    position: absolute;
    right: 20px;
    top: 20px;
}
.langs-menu label {
    display: block;
    margin-bottom: 0.25rem;
}
</style>
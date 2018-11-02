<template>
    <div class="exe">{{this.$store.state.loginModule.subMenusDir}}</div>
</template>

<script>

	import {mapGetters, mapState} from 'vuex';

	export default {
		name: "exe",
		computed: {
			...mapState ({
				'subMenusDirs': state => state.loginModule.subMenusDir
			}),
            ...mapGetters(['subMenus'])
		},
		created () {
			console.log (this.subMenusDirs)
		},
	}
</script>

<style scoped lang="scss">
    .exe {
        width: 100%;
        height: 100%;
        background: #ff6844;
    }
</style>

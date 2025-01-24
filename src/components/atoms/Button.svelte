<script lang="ts">
  import { css } from "@emotion/css";

    export let src;
    export let onClick;
    export let label;

    const style = {
        container: css`
            width: 24px;
            height: 24px;
            background: ${`url("${src}")`} no-repeat center/cover;
        `
    }
</script>

<button on:click={onClick} aria-label={label} class={style.container} type="button"></button>
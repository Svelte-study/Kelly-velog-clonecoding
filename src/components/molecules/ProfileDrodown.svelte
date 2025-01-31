<script lang="ts">
    import { css } from '@emotion/css';
    import AvaterChip from '../atoms/AvaterChip.svelte';
    import ChervonIcon from "../../assets/icon/chervon.svg";

    const style = {
        container: css`
            &::after{
                content:'';
                display: inline-block;
                width: 24px;
                height: 24px;
                background: ${`url("${ChervonIcon}")`} no-repeat center/24px;
                margin-left: 4px;
                vertical-align: middle;
            }
        `
    }
</script>

<button class={style.container}>
    <AvaterChip/>   
</button>
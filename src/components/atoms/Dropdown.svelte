<script lang="ts">
    import { css } from "@emotion/css";
    import ChervonIcon from "../../assets/icon/chervon.svg";
    let isOpen = false
    
    const onHandleOpen = () => isOpen = !isOpen

    const style = {
        container: css`
            position: relative;
            height: 32px;
            padding: 0 8px;
            font-size: 12px;
            font-weight: 600;
            color: #495057;
            background: white;
            box-shadow: 0 0 4px rgba(0,0,0,.05);
            >span{
                line-height: 24px;
                &::after{
                    content: '';
                    margin-left: 4px;
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    background: ${`url("${ChervonIcon}")`} no-repeat center/cover;
                   vertical-align: middle;
                }
            }
        `,
        list: css`
        
        `
    }
</script>

<button type="button" on:click={onHandleOpen} class={style.container}>
    <span>이번 주</span>
    {#if isOpen}
        <ul class={style.list}>
            <li>오늘</li>
            <li>이번 주</li>
            <li>이번 달</li>
            <li>올해</li>
        </ul>
    {/if}
</button>
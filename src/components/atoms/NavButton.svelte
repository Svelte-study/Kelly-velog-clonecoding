<script lang="ts">
	import { css } from '@emotion/css';
  import { link } from 'svelte-routing';
    export let type: "ICON"|"TEXT"|"ICONTEXT";
    export let href:string;
    export let src:string = '';
    export let label:string;

    const style = {
        icon: css`
            display: inline-block;
            width: 40px;
            height: 40px;
            background: ${`url("${src}")`} no-repeat center/24px;
            border-radius: 50%;
            :hover{
                background-color:#EBECED;
            }        
        `,
        text:css`
            display: inline-block;
            height: 32px;
            padding: 1px 16px;
            border: 1px solid #212529;
            border-radius: 999px;
            font-weight: bold;
            line-height: 30px;
            transition: all .125s ease-in;
            &:hover{
                background: #212529;
                color: #f8f9fa;
            }
        `,
        iconText: css`
            display: inline-flex;
            height: 24px;
            line-height: 24px;
            &::before{
                content:'';
                display: inline-block;
                width: 24px;
                height: 24px;
                mask: ${`url("${src}")`} no-repeat center/cover;
                margin-right: 8px;
            }
            
        `
    }
</script>

{#if type==="TEXT"}
    <a href={href} class={style.text}  use:link>{label}</a>
{:else if type==="ICON"}
    <a href={href} class={style.icon} aria-label={label}  use:link></a>
{:else if type==="ICONTEXT"}
    <a href={href} class={style.iconText} use:link>{label}</a>
{/if}
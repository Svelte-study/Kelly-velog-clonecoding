<script lang="ts">
	import { css } from '@emotion/css';
    import LogoIcon from "../../assets/icon/logo.svg"
    import AlertIcon from '../../assets/icon/alert.svg'
    import SearchIcon from '../../assets/icon/search.svg'

    import NavButton from '../atoms/NavButton.svelte';
    import ProfileDrodown from '../molecules/ProfileDrodown.svelte';
    import { breakSize } from '../../style/media';
    
    const style = {
        container: css`
            margin: 0 auto;    
            height: 64px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${breakSize.M3}{
                padding: 12px 16px;
            }
        `,
        toolWrapper: css`
            display: flex;
            align-items: center;
            > :nth-of-type(1){
                margin-right: 4px;
            }
            > :nth-of-type(2){
                margin-right: 8px;
            }
            > :nth-of-type(3){
                margin-right: 20px;
            }
            ${breakSize.M3}{
                > :nth-of-type(1), >:nth-of-type(3){
                margin-right: 0px;
                }
                > :nth-of-type(2){
                    margin-right: 4px;
                }
            }
            ${breakSize.M4}{
                > :nth-of-type(3){
                    display: none;
                }
            }
        `,
        logo: css`
            >img{
                height: 24px;
                ${breakSize.M4}{
                    height: 20px;
                }
            }
        `
    }
</script>

<header class={style.container}>
    <h1 class={style.logo}>
        <img src={LogoIcon} alt="velog">
    </h1>
    <div class={style.toolWrapper}>
        <NavButton type="ICON"href="/notifications" src={AlertIcon} label={"알람"}/>
        <NavButton type="ICON" href="/search" src={SearchIcon} label={"검색"}/>
        <NavButton type="TEXT" href="/" label={"새 글 작성"}/>
        <ProfileDrodown/>
    </div>
</header>
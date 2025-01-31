<script lang="ts">
    import { css } from "@emotion/css";
    import { navigate, useLocation } from 'svelte-routing';

    import NavButton from "../atoms/NavButton.svelte";
    import TrendingIcon from "../../assets/icon/trending.svg";
    import RecentIcon from "../../assets/icon/recent.svg";
    import FeedIcon from "../../assets/icon/feed.svg";
    
    const validType = ["trending", "recent", "feed"];
    const validSort = ["day", "week", "month", "year"];
    const location = useLocation();
    let currentPath = $location.pathname;

    const slug = $location.pathname.split("/")
    let [_, type, sort] = slug
    const getSelectedNumber = ()=> (type === "trending") ? 1 : (type === "recent") ? 2 : (type === "feed") ? 3 : 1;

    let selectedNumber:number =  getSelectedNumber();

    $:{
        if (currentPath !== $location.pathname) {
            currentPath = $location.pathname;
            const slug = currentPath.split("/");
            [_, type, sort] = slug;
            selectedNumber = getSelectedNumber();
        }
    };

    const checkUrl = () => {
        if(type === '') type = 'trending';
        if(type === 'trending' && !sort) sort = 'week';

        if(!validType.includes(type)) navigate("/")
        if(type === "trending" && !validSort.includes(sort)) navigate("/")
        if((type === "recent" || type === "feed") && sort) navigate("/")
    }

    checkUrl()

    const style = {
        container: (selectedNumber:number)=> css`
            width: fit-content;
            position: relative;
            &::after{
                content:'';
                display: inline-block;
                width: 32%;
                height: 2px;
                background-color: #212529;
                position: absolute;
                bottom: -2px;
                left: 0;
                transition: all .125s ease-in-out;
                ${selectedNumber === 1 ? css`
                    left: 0;
                    `:selectedNumber === 2 ?  css`
                    left: 38%;
                    `: css`
                    left: 72%;
                    `}
            }
            >a{
                color: #868e96;
                &::before{
                    background-color: #868e96;
                }
                &:not(:first-of-type){
                    margin-left: 20px;
                }
                &:nth-of-type(${selectedNumber}){
                    color: #212529;
                    font-weight: bold;
                    &::before{
                        background-color: #212529;
                    }
                }
            }
        `
    }

</script>

<nav class={style.container(selectedNumber)}>
    <NavButton type="ICONTEXT" src={TrendingIcon} label="트렌딩" href="/trending/week"/>
    <NavButton type="ICONTEXT" src={RecentIcon} label="최신" href="/recent"/>
    <NavButton type="ICONTEXT" src={FeedIcon} label="피드" href="/feed"/>
</nav>
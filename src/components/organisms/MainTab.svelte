<script lang="ts">
    import { css } from "@emotion/css";
    import TabBar from "../molecules/TabBar.svelte";
    import Button from "../atoms/Button.svelte";

    import MoreIcon from "../../assets/icon/more.svg"
    import Dropdown from "../atoms/Dropdown.svelte";
    const style = {
        container: css`
            display: flex;
            padding: 12px 0;
            > div{
                margin-left: auto;
            }
        `
    }
</script>

<div class={style.container}>
    <TabBar/>
    <div>
        <Dropdown/>
        <Button src={MoreIcon} label="더보기" onClick={()=>{}}/>
    </div>
</div>
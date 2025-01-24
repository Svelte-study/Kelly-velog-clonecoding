<script lang="ts">
  import { css } from "@emotion/css";
  import MainTab from "../components/organisms/MainTab.svelte";
  import { BlogList } from "../mocks/blogList";
  import BlogListItem from "../components/organisms/BlogListItem.svelte";
  import { breakSize } from "../style/media";
  
  const style = {
    container: css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      margin: 32px 0 16px;
      ${breakSize.M2}{
        grid-template-columns: repeat(3, 1fr);
      }
      ${breakSize.M3}{
        grid-template-columns: repeat(2, 1fr);
      }
      ${breakSize.M5}{
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;
      }
    `
  }
</script>

<MainTab/>
<div class={style.container}>
  {#each BlogList as item}
     <BlogListItem data={item}/>
  {/each}
</div>

<script lang="ts">
  import { css } from "@emotion/css";
  import Header from "../components/organisms/Header.svelte";
  import { breakSize } from "../style/media";

  const style = {
    container: css`
      max-width: 1720px;
      margin: 0 auto;
      ${breakSize.M1} {
        max-width: 1376px;
      }
      ${breakSize.M2} {
        max-width: 1024px;
      }
      ${breakSize.M3} {
        max-width: 100%;
      }
    `,
  }
</script>

<div class={style.container}>
    <Header/>
    <main>
      <slot/>
    </main>
</div>
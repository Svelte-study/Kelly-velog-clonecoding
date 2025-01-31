<script lang="ts">
  import { css } from "@emotion/css";

    export let src:string = "https://velog.velcdn.com/images/kimgyuha/profile/9d3d20db-eba3-4474-ad65-149c698469a9/social_profile.png";
    
    const style = {
        container: css`
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${`url("${src}")`} no-repeat center/cover;
        `
    }
</script>

<button type="button" class={style.container} aria-label="profile image"></button>
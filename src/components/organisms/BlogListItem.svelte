<script lang="ts">
    import { css } from "@emotion/css";
    import HeartIcon from "../../assets/icon/heart.svg"
    export let data;

    const style = {
        container: css`
            display: flex;
            flex-direction: column;
            height: 100%;
            background-color: white;
            box-shadow: 0 4px 16px 0 rgba(0,0,0,.04);
            transition: box-shadow .25s ease-in, transform .25s ease-in;
            &:hover{
                box-shadow: 0 12px 20px 0 rgba(0,0,0,.08);
                transform: translateY(-8px)
            }
            >a{
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
        imgWrapper: css`
            padding-top: 52%;
            position:relative;
            >img{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        `,
        textWrapper:css`
            padding: 16px;
            flex: 1;
        `,
        title: css`
            line-height: 1.3rem;
            height: 1.3rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #212529;
            font-weight: bold;
            margin-bottom: 4px;
            `,
        description: css`
            line-height: 1.3rem;
            height: 3.9rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            color: #495057;
            margin-bottom: 24px;
        `,
        subInfo: css`
            font-size: 12px;
            color: #868e96;
            display: flex;
            > span + span{
                &::before{
                    content: '·';
                    margin: 0 4px;
                }
            }
        `,
        footer: css`    
            display:flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #f1f3f5;
            padding: 10px 16px;
            font-size: 12px;
            color: #868e96;
            b{
                color: #212529;
                font-weight: bold;
            }
            >a{
                display: flex;
                align-items:center;
                &::before{
                    content: '';
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: 8px;
                    background: ${`url("${data.user.profile.thumbnail}")`} no-repeat center/cover;
                }
            }
        `,
        heartWrapper: css`
            min-width: fit-content;
            color: #212529;
            &::before{
                content: '';
                display: inline-block;
                width: 12px;
                height: 12px;
                background: ${`url("${HeartIcon}")`} no-repeat center/cover;
                vertical-align: middle;
                margin-right: 12px;
                margin-bottom: 2px;
            }  
        `
    }
</script>

<article class={style.container}>
    <a href={`https://velog.io/@${data.user.username}/${data.url_slug}`}>
        {#if data.thumbnail}
            <div class={style.imgWrapper}>
                <img src={data.thumbnail} alt="">
            </div>
        {/if}
        <div class={style.textWrapper}>
            <p class={style.title}>{data.title}</p>
            <p class={style.description}>{data.short_description}</p>
            <div class={style.subInfo}>
                <span>6일전</span>
                <span>{data.comments_count}개의 댓글</span>
            </div>
        </div>
    </a>
    <div class={style.footer}>
        <a href={`https://velog.io/@${data.user.username}/posts`}>
           <span> by <b>{data.user.profile.display_name}</b></span>
        </a>
        <span class={style.heartWrapper}>
            {data.likes}
        </span>
    </div>
</article>
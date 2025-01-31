<script lang="ts">
    import { link, navigate, useLocation } from 'svelte-routing';

    const location = useLocation();
    let currentPath = $location.pathname;

    
    const slug = currentPath.split("/");
    let [_, __, type, sort] = slug;
    const getSelectedNumber = ()=> (type === "trending") ? 1 : (type === "recent") ? 2 : (type === "feed") ? 3 : 1;
    const getLeftPosition = ()=> selectedNumber === 1 ? '0%' : selectedNumber === 2 ? '38%' : '72%';

    let selectedNumber:number =  getSelectedNumber();
    let leftPosition:string = getLeftPosition();

    $:{
        if (currentPath !== $location.pathname) {
            currentPath = $location.pathname;
            const slug = currentPath.split("/");
            [_, __, type, sort] = slug;

            selectedNumber = getSelectedNumber();
            leftPosition = getLeftPosition();
        }
    };
    
    
    type CssVariables = {
        [key: string]: string | number;
    };

    const cssVariables = (node: HTMLElement, variables: CssVariables) => {
        setCssVariables(node, variables);
        return {
            update(newVariables: CssVariables) {
                setCssVariables(node, newVariables);
            }
        }
    };

    const setCssVariables = (node: HTMLElement, variables: CssVariables) => {
        for (const name in variables) {
            node.style.setProperty(`--${name}`, `${variables[name]}`);
        }
    };
</script>

<nav class="container" use:cssVariables={{ "left-position":leftPosition }}>
    <a class:selected={selectedNumber === 1} use:link href="/test2/trending/week">트렌딩</a>
    <a class:selected={selectedNumber === 2} use:link href="/test2/recent">최신</a>
    <a class:selected={selectedNumber === 3} use:link href="/test2/feed">피드</a>
</nav>

<style lang="scss">
    .container {
        width: fit-content;
        position: relative;
    }

    .container::after {
        content: '';
        display: inline-block;
        width: 32%;
        height: 2px;
        background-color: #212529;
        position: absolute;
        bottom: -2px;
        transition: all .125s ease-in-out;
        left: var(--left-position);
    }

    a {
        color: #868e96;
    }

    a.selected {
        color: #212529;
        font-weight: bold;
    }
</style>

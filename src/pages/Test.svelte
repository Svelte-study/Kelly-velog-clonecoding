<script lang="ts">
    let color = "black";
    let size = 16;

    type CssVariables = {
        [key: string]: string|number;
    };

    const cssVariables = (node: HTMLElement, variables: CssVariables) => {
        setCssVariables(node, variables)
        return{
            update(newVariables: CssVariables) {
                setCssVariables(node, newVariables)
            }
        }
    }
    const setCssVariables = (node: HTMLElement, variables: CssVariables) => {
        for(const name in variables){
            node.style.setProperty(`--${name}`, `${variables[name]}`)
        }
    }
</script>

<input type="range" bind:value={size} min="1" max="100">
<input type="color" bind:value={color}>
<h1 use:cssVariables={{color, size}}>This is Test Page</h1>

<style>
    h1{
        color: var(--color);
        font-size: calc(var(--size) * 1px);
        font-weight: bold;
    }
</style>
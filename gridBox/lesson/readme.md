# grid box
```html
<div class="container">
    <div class="cell cell-1">Cell 1</div>
    <div class="cell cell-2">Cell 2</div>
    <div class="cell cell-3">Cell 3</div>
    <div class="cell cell-4">Cell 4</div>
    <div class="cell cell-5">Cell 5</div>
    <div class="cell">Cell 6</div>
    <div class="cell">Cell 7</div>
</div>
```

```css
.container{
    display: grid;
    grid-template-columns: 200px 7rem auto;
}
```

auto allows the grid item to occupy the entire width of the available space.

# fr units - fraction of available space
# gap
```css
.container{
    column-gap: 2rem ;
    row-gap: 2rem;
    gap: 2rem 3rem; /* shortcut of row and column gap first value for row and second column  */
}
```

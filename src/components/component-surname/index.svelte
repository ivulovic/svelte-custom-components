<script>
  export let surname;
  export let id;

  let element;

  const event = new CustomEvent("message", {
    detail: {
      text: "Hello parent!",
      id: "surname",
    },
    bubbles: true,
    cancelable: true,
    composed: true, // makes the event jump shadow DOM boundary
  });

  const onClick = () => {
    console.log("handling click inside svelte");
    element.dispatchEvent(event);
  };
</script>

<style>
  div {
    color: blue;
  }
</style>

<div bind:this={element} {id} on:click={onClick}>
  hello my surname is
  {surname}
</div>

<svelte:options tag="component-surname" />

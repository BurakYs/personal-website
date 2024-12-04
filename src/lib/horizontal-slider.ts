import draggingStore from '$lib/stores/dragging';

export function setupHorizontalSlider(container: HTMLElement) {
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  function handleMouseDown(event: MouseEvent) {
    changeDraggingState(true);
    startX = event.pageX;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging) return;

    const walk = event.pageX - startX;
    container.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUp() {
    if (!isDragging) return;

    changeDraggingState(false);
    container.style.cursor = 'grab';
  }

  function changeDraggingState(state: boolean) {
    isDragging = state;

    setTimeout(() => {
      draggingStore.set(state);
    }, 100);
  }

  container.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);

  return {
    destroy() {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };
}
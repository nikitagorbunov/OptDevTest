export const disableScrolling = (check: boolean): void => {
  if (check) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowX = "visible";
    document.body.style.overflowY = "scroll";
  }
}

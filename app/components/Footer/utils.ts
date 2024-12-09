export function getRelativeCoordinates(
  event: { pageX: any; pageY: any },
  referenceElement: {
    offsetLeft: any;
    offsetTop: any;
    clientWidth: any;
    clientHeight: any;
    offsetParent: any;
  },
  boundaryElement: {
    offsetLeft: any;
    offsetTop: any;
    clientWidth: any;
    clientHeight: any;
    offsetParent: any;
  }
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  const boundaryOffset = {
    left: boundaryElement.offsetLeft,
    top: boundaryElement.offsetTop,
    width: boundaryElement.clientWidth,
    height: boundaryElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const relativeX = position.x - offset.left;
  const relativeY = position.y - offset.top;

  const clampedX = Math.max(
    boundaryOffset.left,
    Math.min(position.x, boundaryOffset.left + boundaryOffset.width)
  );
  const clampedY = Math.max(
    boundaryOffset.top,
    Math.min(position.y, boundaryOffset.top + boundaryOffset.height)
  );

  const centerX =
    (clampedX - offset.left - offset.width / 2) / (offset.width / 2);
  const centerY =
    (clampedY - offset.top - offset.height / 2) / (offset.height / 2);

  return {
    x: clampedX - boundaryOffset.left,
    y: clampedY - boundaryOffset.top,
    width: offset.width,
    height: offset.height,
    centerX,
    centerY,
  };
}

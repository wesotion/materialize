import BoundElements from './BoundElements';

export default abstract class MaterialObject<E extends Element> {
  protected boundElements: BoundElements;

  constructor(protected element: E) {
    this.boundElements = new BoundElements();
    this.setInstance(element);
  }

  protected abstract setInstance(element: E);

  protected getIdFromTrigger(trigger): string {
    let id = trigger.getAttribute('data-target');
    if (!id) {
      id = trigger.getAttribute('href');
      if (id) {
        id = id.slice(1);
      } else {
        id = '';
      }
    }
    return id;
  }

  protected getDocumentScrollTop(): number {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}

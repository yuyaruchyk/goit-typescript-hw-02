/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface MyInterface {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<MyInterface> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

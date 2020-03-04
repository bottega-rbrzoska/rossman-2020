
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  describe('Isolated tests', () => {
    let component: ProductAddComponent;
    let productServiceSpy = jasmine.createSpyObj('ProductsService', {
      fetchCategories: {}
    });
    let routerServiceSpy = jasmine.createSpyObj('Router', {
      navigateByUrl: {}
    });

    it('should fetch categories if not set ', () => {
      // given
      productServiceSpy.categories = null;
      // when
      component = new ProductAddComponent(productServiceSpy, routerServiceSpy);

      // then
      expect(productServiceSpy.fetchCategories).toHaveBeenCalled();
    });

    it('should not fetch categories if set ', () => {
      // given
      productServiceSpy.categories = ['category'];
      // when
      component = new ProductAddComponent(productServiceSpy, routerServiceSpy);

      // then
      expect(productServiceSpy.fetchCategories).not.toHaveBeenCalled();
    });

  });
  // describe('Shallow tests', () => {
  //   let spectator: Spectator<ProductFormComponent>;
  //   const createComponent = createComponentFactory({
  //     component: ProductFormComponent,
  //     imports: [ReactiveFormsModule]
  //   });

  //   beforeEach(() => spectator = createComponent());

  //   it('should show error message if form is invalid', () => {
  //   });
  // });
});

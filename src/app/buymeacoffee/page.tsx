import { OneFourthLayout, Sidebar } from 'core/components';
import CoffeeForm from 'modules/buymeacoffee/components/CoffeeForm';

const BuyMeACoffeePage = () => {
  return (
    <OneFourthLayout
      title={'Donation ;)'}
      headingClasses={'mb-16'}
      childrenLeft={<CoffeeForm />}
      childrenRight={<Sidebar />}
    />
  );
};

export default BuyMeACoffeePage;

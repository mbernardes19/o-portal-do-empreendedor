import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreditoPayment from './CreditoPayment';
import PixPayment from './PixPayment';

export const PaymentSelector = () => (
  <Tabs>
    <TabList>
      <Tab>Cartão de crédito</Tab>
      <Tab>Pix</Tab>
    </TabList>

    <TabPanel>
        <CreditoPayment />
    </TabPanel>
    <TabPanel>
        <PixPayment />
    </TabPanel>
  </Tabs>
);
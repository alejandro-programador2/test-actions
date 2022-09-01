import { Accordion } from "components/Accordion/Accordion";
import { AccordionItem } from "components/Accordion/AccordionItem";
import { AccordionPanel } from "components/Accordion/AccordionPanel";
import { AccordionButton } from "components/Accordion/AccordionButton";

export const App = () => {
   return (
   <div style={{ maxWidth: '45vw'}}>
	   <Accordion  allowMultiple defaultIndex={[0]}>
	
	<AccordionItem>
		<AccordionButton>
			<span>Open!</span>
		</AccordionButton>
			
		<AccordionPanel>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</AccordionPanel>
	</AccordionItem>

	<AccordionItem>
		<AccordionButton>
			<span>Open!</span>
		</AccordionButton>
		
		<AccordionPanel>
			<p>
				Second accordion
			</p>
		</AccordionPanel>
	</AccordionItem>


	<AccordionItem>
		<AccordionButton>
			<span>Open!</span>
		</AccordionButton>
		
		<AccordionPanel>
			<p>
				Third accordion
			</p>
		</AccordionPanel>
	</AccordionItem>


	<AccordionItem>
		<AccordionButton>
			<span>Open!</span>
		</AccordionButton>
		
		<AccordionPanel>
			<p>
				Fourth accordion
			</p>
		</AccordionPanel>
	</AccordionItem>

	<AccordionItem>
		<AccordionButton>
			<span>Open!</span>
		</AccordionButton>
		
		<AccordionPanel>
			<p>
				Second accordion
			</p>
		</AccordionPanel>
	</AccordionItem>
</Accordion>
   </div>
   );
};

import React, { PropsWithChildren } from "react";
import Box from "components/Box/Box";
import Text from "components/Text/Text";

interface Props {
  label: string;
  id: string;
}

const FormFieldGroup = ({ children, label, id }: PropsWithChildren<Props>) => {
  return (
    <Box marginBottom={2}>
      <Box marginBottom={1}>
        <label htmlFor={id}>
          <Text size={20}>{label}</Text>
        </label>
      </Box>
      {children}
    </Box>
  );
};

export default FormFieldGroup;

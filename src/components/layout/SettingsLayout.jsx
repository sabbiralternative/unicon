import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSettingsMutation } from "../../hooks/settings";
import { API } from "../../api";

const SettingsLayout = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { mutate } = useSettingsMutation();

  useEffect(() => {
    mutate();
  }, [token, mutate]);

  if (!API.login) {
    return null;
  }

  return children;
};

export default SettingsLayout;

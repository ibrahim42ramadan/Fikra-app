import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_users,
  update_user_type,
  delete_User,
} from "../../../rtk/Silcess/user_slics";
import "./../css/AdminUsersTable.css";

const AdminUsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(get_all_users());
  }, [dispatch]);

  const handleTypeChange = (id, newType) => {
    dispatch(update_user_type({ id, type: newType }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(delete_User(id));
    }
  };

  return (
    <div className="table-container">
      <h2>إدارة المستخدمين</h2>
      <table>
        <thead>
          <tr>
            <th>الصورة</th>
            <th>ID</th>
            <th>الاسم</th>
            <th>البريد الإلكتروني</th>
            <th>النوع</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.imageUrl || "default-image-url.jpg"} // تأكد من أنك قد قمت بإضافة صورة افتراضية إذا لم تكن الصورة موجودة
                  alt={user.username}
                  className="user-image"
                />
              </td>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.type}
                  onChange={(e) => handleTypeChange(user.id, e.target.value)}
                >
                  <option value="user">مستخدم</option>
                  <option value="admin">مدير</option>
                  <option value="employee">موظف</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="delete-button"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersTable;

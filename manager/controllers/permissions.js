module.exports = function (api) {
  return {
    listPermissionGroups: function (req, res) {
      api.permissions.listPermissionGroups (req.params.boxName, function (err, groups) {
        if (err) {
          console.error(err);
          res.status(418);
          return res.end();
        }
        
        res.json(groups);
      });
    },
    describePermissionGroup: function (req, res) {
      if (err) {
        console.error(err);
        res.status(418);
        return res.end();
      }
      
      res.json(groups);
    },
    createPermissionGroup: function (req, res) {
      api.permissions.createPermissionGroup(req.params.boxName, req.body.name, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    },
    deletePermissionGroup: function (req, res) {
      api.permissions.deletePermissionGroup(req.params.boxName, req.params.groupId, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    },
    modifyPermissionGroup: function (req, res) {
      api.permissions.modifyPermissionGroup(req.params.boxName, req.params.groupId, req.body, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    },
    addUserToGroup: function (req, res) {
      api.permissions.addUserToGroup(req.params.boxName, req.params.groupId, req.params.alias, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    },
    removeUserFromGroup: function (req, res) {
      api.permissions.addUserToGroup(req.params.boxName, req.params.groupId, req.params.alias, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    },
    listUsersInGroup: function (req, res) {
      api.permissions.listUsersInGroup(req.params.boxName, req.params.groupId, function (err) {
        if (err) console.error(err);
        
        res.status(err ? 418 : 200);
        return res.end();
      });
    }
  }
};

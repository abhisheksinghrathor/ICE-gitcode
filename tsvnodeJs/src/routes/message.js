import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
const tsv2json = require('../tsv2json');

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.messages);
});

router.post('/', (req, res) => {
 const data = req.body.data;
      console.log(data);
      tsv2json.parseAsFile(data).then(function(value) {
        req.context.models.messages = value;
        return res.send(JSON.stringify(value));
        });
});

export default router;
